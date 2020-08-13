import {ToyReact,Component} from "./ToyReact.js"
window.Square = {}

class Square extends Component{
    constructor(props){
        super(props);
        this.state = {
            value: null,
        };
    }
    render(){
        return (
            <button className="square" onClick={()=>this.setState({value: 'X'})}>
                {this.state.value ? this.state.value : ""}
            </button>
        );
    }
}
class Board extends Component{
    renderSuqare(i){
        return <Square value={i}/>
    }
    render(){
        window.Square[this.props['value']];
        return(
            <div>
                <div className="board-row">
                    {this.renderSuqare(0)}
                    {this.renderSuqare(1)}
                    {this.renderSuqare(2)}
                </div>
                <div className="board-row">
                    {this.renderSuqare(3)}
                    {this.renderSuqare(4)}
                    {this.renderSuqare(5)}
                </div>
                <div className="board-row">
                    {this.renderSuqare(6)}
                    {this.renderSuqare(7)}
                    {this.renderSuqare(8)}
                </div>
            </div>
        );
    }
}

let a = <Board />


// class MyComponent extends Component{
//     render(){
//         return <div>
//                     <span>Hello</span>
//                     <span>word</span>
//                     <div>
//                         {true}
//                         {this.children}
//                     </div>
//                 </div>
//     }
//     // setAttribute(name, value){
//     //     this[name] = value;
//     // }
//     // mountTo(parent){
//     //     let vdom = this.render();
//     //     vdom.mountTo(parent);
//     // }
// }

// let a = <MyComponent name="a" id="ida">
//     <div>123</div>
// </MyComponent>

ToyReact.render(
    a,
    document.body
);


// document.body.appendChild(a);