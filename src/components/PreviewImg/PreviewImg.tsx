// import { useCallback, useRef, useState } from "react";
// import "./App.css";

// export default function PreviewImg() {
//   // input 클릭 되도록 하는 ref
//   const fileRef = useRef(null);

//   // 업로드에 들어갈 상태값
//   const [upload, setUpload] = useState("");

//   const handleUpload = useCallback((e) => {
//     // 1번
//     // setUpload((prev) => [
//     //   ...prev,
//     //   URL.createObjectURL(fileRef.current.files[0]),
//     // ]);

//     // 2번
//     const file = e.target.files[0];
//     const reader = new FileReader();
//     reader.readAsDataURL(file);

//     reader.onloadend = () => {
//       setUpload(reader.result);
//     };
//   }, []);

//   // 업로드 할 때 다른 것을 눌러도 input창 클릭 되도록 하는 이벤트
//   const handleAddUpload = useCallback(() => {
//     fileRef?.current?.click();
//   }, []);

//   // 미리보기 삭제 이벤트 배열이면 따로 id값이나 index값을 가져와야 할텐데 굳이 하나만 있어서 setState 초기화로 변경
//   // 해방 이벤트는 이미지 나올 때 상단위에 x버튼 눌러서 삭제 가능하게 만들던지 그건 마음대로 하면 될듯?
//   const handleRemoveImage = useCallback(() => {
//     setUpload("");
//   }, []);

//   return (
//     <div>
//       <div>
//         <p>이미지 테스트</p>
//       </div>
//       <div>
//         <input type="file" ref={fileRef} onChange={handleUpload} />
//       </div>
//       <div>
//         <button onClick={handleAddUpload}>클릭 미!!</button>
//         {upload && (
//           <img src={upload} onClick={handleRemoveImage} alt="이미지 미리보기" />
//         )}
//       </div>
//     </div>
//   );
// }
