import type { NextPage } from 'next'
import Header from '../../components/public/Header'
import styled from '@emotion/styled'
import { FormEventHandler, useState } from 'react'
import Image from 'next/image'
import FolderAddIcon from '../../assets/folder-add.svg'
import ArrowForwardIcon from '../../assets/arrow-forward.svg'
import PlusSquareIcon from '../../assets/plus-square.svg'
import BottomSheet from '../../components/public/BottomSheet'

const IMAGE_SIZE = 80

const Form = styled.form`
  padding: 40px 25px;
  margin-top: 30px;

  overflow: hidden;
`

const FileForm = styled.div`
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

const ImageBox = styled.div`
  width: ${IMAGE_SIZE}px;
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

const TagInput = styled.input`
  width: 100%;
  height: 50px;

  font-size: 16px;

  border: 0;
  padding: 0;
  outline: 0;
`

const SheetButton = styled.div`
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: 16px;

  padding: 0;

  border-bottom: 2px solid #eee;
`

const ProductSelect = styled.div`
  font-size: 16px;
  line-height: 50px;

  p {
    margin: 0;
  }

  border-bottom: 2px solid #eee;
`

const Posts: NextPage = () => {
  const [images, setImages] = useState<FileList | null>(null)
  const [imageUrls, setImageUrls] = useState<string[]>([])

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

  return (
    <div>
      <Header title="게시글 작성" left="<" right="my" />
      <Form>
        <FileForm>
          <FileInput htmlFor="upload-image" onChange={onChangeImages}>
            <HiddenInput type="file" multiple id="upload-image" />
            <FolderAddIcon />
          </FileInput>
          <Preview>
            {imageUrls.map((imageUrl) => (
              <ImageBox key={imageUrl}>
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
        <TextInput type="text" placeholder="요리명 작성" />
        <SheetButton>
          요리분류
          <ArrowForwardIcon />
        </SheetButton>
        <ProductSelect>
          <p>사용 상품</p>
          <PlusSquareIcon />
        </ProductSelect>
        <TagInput type="text" placeholder="#요리태그" />
      </Form>
      <BottomSheet />
    </div>
  )
}

export default Posts
