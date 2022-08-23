import styled from '@emotion/styled'
import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { FormEventHandler, useEffect, useState } from 'react'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import api from '../../../api'
import ArrowForwardIcon from '../../../assets/arrow-forward.svg'
import FolderAddIcon from '../../../assets/folder-add.svg'
import PlusSquareIcon from '../../../assets/plus-square.svg'
import CategorySelect from '../../../components/posts/CategorySelect'
import BottomSheet from '../../../components/public/BottomSheet'
import Header from '../../../components/public/Header'
import useCategories from '../../../hooks/useCategories'
import {
  selectedCategory1State,
  selectedCategory2State,
} from '../../../stores/categories'
import { isOpenedSheetState } from '../../../stores/sheet'
import { selectedProductsState } from '../../../stores/upload'

const IMAGE_SIZE = 80
const IMAGE_SIZE_SM = 50

const Form = styled.form`
  padding: 40px 25px;
  margin-top: 30px;

  display: flex;
  flex-direction: column;
  align-items: center;

  overflow: hidden;
`

const FileForm = styled.div`
  width: 100%;
  padding: 20px 0 10px;

  border-bottom: 2px solid #eee;
`

const FileInput = styled.label`
  width: ${IMAGE_SIZE}px;
  height: ${IMAGE_SIZE}px;

  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;

  background-color: #fff;

  border: 1px solid #e7e6e6;
  border-radius: 5px;
`

const HiddenInput = styled.input`
  display: none;
`

const Preview = styled.div`
  display: flex;
  overflow-x: scroll;

  padding-top: 10px;

  gap: 5px;
`

interface ImageBoxStyledType {
  width: number
}

const ImageBox = styled.div<ImageBoxStyledType>`
  width: ${({ width }) => width}px;
  flex-shrink: 0;
`

const TextInput = styled.input`
  width: 100%;
  height: 50px;

  font-size: 16px;

  border: 0;
  padding: 0;
  border-bottom: 2px solid #eee;
  outline: 0;
`

const SheetButton = styled.div`
  width: 100%;
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: 16px;

  padding: 0;

  border-bottom: 2px solid #eee;
`

const ProductSelect = styled.div`
  width: 100%;

  font-size: 16px;
  line-height: 50px;

  p {
    margin: 0;
  }

  border-bottom: 2px solid #eee;
`

const SubmitButton = styled.button`
  width: 230px;
  height: 40px;

  position: absolute;
  bottom: 60px;

  font-size: 16px;
  color: #fff;

  background-color: #5f0080;

  border-radius: 5px;
`

const ProductPreview = styled.div`
  width: calc(100% - 60px);
  display: inline-flex;
  gap: 5px;
  padding-left: 10px;

  overflow-x: scroll;
`

const TagForm = styled.div`
  width: 100%;
  height: 50px;

  padding: 12px 0;

  font-size: 16px;
  color: #5f0080;
`

const TagInput = styled.input`
  font-size: 16px;
  color: #333;
`

const TextAreaInput = styled.textarea`
  width: 100%;
  height: 100px;

  font-size: 16px;

  border: 0;
  padding: 11.5px 0;
  border-bottom: 2px solid #eee;
  outline: 0;

  resize: none;
`

const Selected = styled.div`
  color: #5f0080;
`

const Posts: NextPage = () => {
  const getCategories = useCategories()

  const setIsOpendedSheet = useSetRecoilState<boolean>(isOpenedSheetState)
  const selectedProducts = useRecoilValue(selectedProductsState)
  const [selectedCategory1, setSelectedCategory1] = useRecoilState(
    selectedCategory1State,
  )
  const [selectedCategory2, setSelectedCategory2] = useRecoilState(
    selectedCategory2State,
  )

  const [title, setTitle] = useState<string>('')
  const [images, setImages] = useState<FileList | null>(null)
  const [imageUrls, setImageUrls] = useState<string[]>([])
  const [text, setText] = useState<string>('')
  const [tags, setTags] = useState<string>('')

  useEffect(() => {
    getCategories()
  }, [])

  const onChangeImages: FormEventHandler<HTMLLabelElement> = (e) => {
    const target = e.target as HTMLInputElement
    const files = target.files
    const fileUrls = []

    if (!files) return

    for (let i = 0; i < files.length; i++) {
      fileUrls.push(URL.createObjectURL(files[i]))
    }

    setImages(files)
    setImageUrls(fileUrls.slice(0, 10))
  }

  const onClickSheetButton = () => {
    setIsOpendedSheet(true)
  }

  const onSubmit = () => {
    const uploadPost = async () => {
      const form = new FormData()

      const tagString = tags.replaceAll('#', '').split(' ').join(',')
      const productString = selectedProducts
        .map((product) => product._id)
        .join(',')

      form.append('title', title)
      form.append('text', text)
      form.append('tags', tagString)
      form.append('products', productString)
      form.append('category1', selectedCategory1)
      form.append('category2', selectedCategory2)

      if (images) {
        for (let i = 0; i < images.length; i++) {
          form.append('images', images[i])
        }
      }

      console.log(form)

      try {
        const res = await api.post('/post', form)
        return res
      } catch (e) {
        console.log(e)
      }
    }

    uploadPost()
  }

  return (
    <div>
      <Header title="게시글 작성" />
      <Form>
        <FileForm>
          <FileInput htmlFor="upload-image" onChange={onChangeImages}>
            <HiddenInput type="file" multiple id="upload-image" />
            <FolderAddIcon />
          </FileInput>
          <Preview>
            {imageUrls.map((imageUrl) => (
              <ImageBox key={imageUrl} width={IMAGE_SIZE}>
                <Image
                  src={imageUrl}
                  alt="preview"
                  width={IMAGE_SIZE}
                  height={IMAGE_SIZE}
                  style={{ borderRadius: 5 }}
                />
              </ImageBox>
            ))}
          </Preview>
        </FileForm>
        <TextInput
          type="text"
          placeholder="요리명 작성"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <SheetButton onClick={onClickSheetButton}>
          요리분류
          {selectedCategory1 !== '' && selectedCategory2 !== '' && (
            <Selected>{`${selectedCategory1} > ${selectedCategory2}`}</Selected>
          )}
          <ArrowForwardIcon />
        </SheetButton>
        <ProductSelect>
          <p>사용 상품</p>
          <Link href="/posts/upload/purchases">
            <a>
              <PlusSquareIcon />
            </a>
          </Link>
          {selectedProducts && (
            <ProductPreview>
              {selectedProducts.map((product) => (
                <ImageBox key={product._id} width={IMAGE_SIZE_SM}>
                  <Image
                    src={product.image}
                    alt="purchased product"
                    width={IMAGE_SIZE_SM}
                    height={IMAGE_SIZE_SM}
                    style={{ borderRadius: 5 }}
                  />
                </ImageBox>
              ))}
            </ProductPreview>
          )}
        </ProductSelect>
        <TextAreaInput
          placeholder="요리설명"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <TagForm>
          <TagInput
            type="text"
            placeholder="#요리태그"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
        </TagForm>
        <SubmitButton type="button" onClick={onSubmit}>
          등록
        </SubmitButton>
      </Form>
      <BottomSheet>
        <CategorySelect />
      </BottomSheet>
    </div>
  )
}

export default Posts
