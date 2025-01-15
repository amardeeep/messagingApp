import newChat from './svgs/addNew.svg'
import verticalMore from './svgs/verticalMore.svg'

function ChatNavigationSection(){
    return (
        <div className="section">
            <div className="header">
                <div className="nameLine">
                    <h1>Chats</h1>
                    <div className="icons">
                        <img src={newChat} alt="New Chat" />
                        <img src={verticalMore} alt="More Options" />
                    </div>
                    <input type="text" />
                    <div className="filters">
                        <ul>
                            <li>Lorem.</li>
                            <li>Dolorum.</li>
                            <li>Autem!</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="chats">
                <ul>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Explicabo molestiae aliquid repudiandae vel.</li>
                    <li>Fuga aspernatur molestias ex fugiat.</li>
                    <li>Ab, totam deserunt. Voluptatum, eveniet?</li>
                    <li>Vel soluta aliquid in libero.</li>
                </ul>
            </div>
        </div>
    )
}
export default ChatNavigationSection