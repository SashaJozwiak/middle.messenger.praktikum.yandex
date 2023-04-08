
import { chatListComponent } from "../components/chatList";


export default function addComponents() {
    let chatList = document.querySelector('#chat-list');

    if (chatList) {
        chatList.innerHTML = chatListComponent;
    }
}
