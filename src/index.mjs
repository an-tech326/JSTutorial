
const onClickAdd = ()=>{
    const inputText = document.getElementById("add-text").value;
    document.getElementById("add-text").value=""
    //li生成
    const li = document.createElement("li");
    //div生成
    const div = document.createElement("div");
    div.className="list-row";
    //p生成
    const p = document.createElement("p");
    p.className="todo-item";
    p.innerText=inputText;
    //完了ボタン生成
    const completeButton = document.createElement("button");
    completeButton.addEventListener("click",()=>{onClickComplete(completeButton);});
    completeButton.innerText = "完了";
    //削除ボタン生成
    const deleteButton = document.createElement("button");
    deleteButton.addEventListener("click",()=>{onClickDelete(deleteButton);});
    deleteButton.innerText = "削除";
    //追加
    div.appendChild(p);
    div.appendChild(completeButton);
    div.appendChild(deleteButton);
    li.appendChild(div);
    document.getElementById("incomplete-list").appendChild(li);
    console.log(li);
}

const onClickComplete = (completeButton) =>{
    const moveTarget = completeButton.closest("li");
    completeButton.nextElementSibling.remove();
    completeButton.remove();
    const backButton = document.createElement("button");
    backButton.innerText ="戻す";
    moveTarget.firstElementChild.appendChild(backButton);
    document.getElementById("complete-list").appendChild(moveTarget);
    backButton.addEventListener("click",()=>{onClickBack(backButton)});
}
const onClickDelete = (deleteButton) =>{
    const deleteTarget = deleteButton.closest("li");
    document.getElementById("incomplete-list").removeChild(deleteTarget);
}
const onClickBack = (backButton)=>
{
    const moveTarget = backButton.closest("li");
    const completeButton = document.createElement("button");
    completeButton.innerText = "完了"
    completeButton.addEventListener("click",()=>{onClickComplete(completeButton)});
    const deleteButton = document.createElement("button");
    deleteButton.innerText="削除"
    deleteButton.addEventListener("click",()=>onClickDelete(deleteButton));
    backButton.remove();
    moveTarget.firstElementChild.appendChild(completeButton);
    moveTarget.firstElementChild.appendChild(deleteButton);
    document.getElementById("incomplete-list").appendChild(moveTarget);
}
document.getElementById("add-button")
    .addEventListener("click",onClickAdd);
