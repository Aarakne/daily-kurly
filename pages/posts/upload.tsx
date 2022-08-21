import type { NextPage } from 'next'
import Header from '../../components/public/Header'
import styled from '@emotion/styled'
import { FormEventHandler, useState } from 'react'
import Image from 'next/image'

const IMAGE_SIZE = 100

const Form = styled.form`
  padding: 20px 25px;
  margin-top: 30px;
`

const FileInput = styled.label`
  display: block;
  width: ${IMAGE_SIZE}px;
  height: ${IMAGE_SIZE}px;

  background-color: #e7e6e6;

  border-radius: 5px;
`

const HiddenInput = styled.input`
  display: none;
`

const Preview = styled.div`
  padding-top: 15px;
  display: flex;

  gap: 5px;
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
        <FileInput htmlFor="upload-image" onChange={onChangeImages}>
          <HiddenInput type="file" multiple id="upload-image" />
        </FileInput>
        <Preview>
          {imageUrls.map((imageUrl) => (
            <Image
              key={imageUrl}
              src={imageUrl}
              alt="preview"
              width={IMAGE_SIZE}
              height={IMAGE_SIZE}
              style={{ borderRadius: 5 }}
            />
          ))}
        </Preview>
      </Form>
    </div>
  )
}

export default Posts
