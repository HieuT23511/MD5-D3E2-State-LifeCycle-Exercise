import {useState} from "react";

export default function ExpandCollapseContent({props}) {
    let [isShowContent, setIsShowContent] = useState(true);
    return (
        <>
            <h1>{props}</h1>
            <div style={{textAlign: "center", padding: 30}}>
                <div style={{
                    marginTop: 50,
                    position: "relative",
                    backgroundColor: "green",
                    width: "100%",
                    height: 100
                }}>
                    <h1 style={{
                        margin: 0,
                        color: "white",
                        position: "absolute",
                        left: "50%",
                        top: "50%",
                        transform: "translate(-50%, -50%)",
                    }}>Conditional Rendering</h1>
                </div>
            </div>
            <div style={{padding: 30}}>
                <button onClick={() => {
                    setIsShowContent(!isShowContent)
                }}>Đóng giới thiệu
                </button>
                {isShowContent &&
                    <div>
                        <h2>Giới thiệu</h2>
                        <p>Trong ReactJS, đôi khi bạn có một số component và tuỳ thuộc vào từng điều kiện ví dụ như
                            trạng thái của state, props..</p>
                    </div>
                }
            </div>
        </>
    )
}