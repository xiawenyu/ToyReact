import {ToyReact,Component} from "./ToyReact.js"

class MyComponent extends Component{
    render(){
        return <div>
                    <span>Hello</span>
                    <span>word</span>
                    <div>
                        {true}
                        {this.children}
                    </div>
                </div>
    }
    // setAttribute(name, value){
    //     this[name] = value;
    // }
    // mountTo(parent){
    //     let vdom = this.render();
    //     vdom.mountTo(parent);
    // }
}

let a = <MyComponent name="a" id="ida">
    <div>123</div>
</MyComponent>

ToyReact.render(
    a,
    document.body
);


// document.body.appendChild(a);