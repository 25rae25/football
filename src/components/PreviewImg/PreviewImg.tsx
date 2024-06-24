import { ChangeEvent, ForwardedRef, MouseEventHandler } from "react";

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
      <div>
        <p>이미지 테스트</p>
      </div>
      <div>
        <input type="file" ref={fileRef} onChange={handleUpload} />
      </div>
      <div>
        <button onClick={handleAddUpload}>클릭 미!!</button>
        {upload && (
          <img src={upload} onClick={handleRemoveImage} alt="이미지 미리보기" />
        )}
      </div>
    </div>
  );
}
