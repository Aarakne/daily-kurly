import type { NextPage } from 'next'
import Header from '../../components/public/Header'
import styled from '@emotion/styled'
import { FormEventHandler, useState } from 'react'
import Image from 'next/image'
import FolderAddIcon from '../../assets/folder-add.svg'

const IMAGE_SIZE = 80

const Form = styled.form`
  padding: 20px 25px;
  margin-top: 30px;
`

const FileForm = styled.div`
  display: flex;
  overflow: scroll-x;
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
  padding-left: 10px;

  gap: 5px;
`

const ImageBox = styled.div`
  width: ${IMAGE_SIZE}px;
  flex-shrink: 0;
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
      </Form>
    </div>
  )
}

export default Posts
