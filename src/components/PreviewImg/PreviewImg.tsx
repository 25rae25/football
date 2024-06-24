import { ChangeEvent, ForwardedRef, MouseEventHandler } from "react";
import * as S from "./PreviewImgStyles";

type Props = {
  handleAddUpload: MouseEventHandler<HTMLButtonElement>;
  handleUpload: (e: ChangeEvent<HTMLInputElement>) => void;
  handleRemoveImage: () => void;
  upload: string;
  fileRef: ForwardedRef<HTMLInputElement>;
};

export default function PreviewImg({
  handleAddUpload,
  handleUpload,
  handleRemoveImage,
  upload,
  fileRef,
}: Props) {
  return (
    <div>
      <S.ImageInput type="file" ref={fileRef} onChange={handleUpload} />
      <div>
        <S.PreviewButton onClick={handleAddUpload}>
          {upload && (
            <S.PreviewImg
              width={100}
              height={100}
              src={upload}
              onClick={handleRemoveImage}
              alt="이미지 미리보기"
            />
          )}
        </S.PreviewButton>
      </div>
    </div>
  );
}
