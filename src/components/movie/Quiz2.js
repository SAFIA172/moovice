import React from 'react';

class Quizz extends React.Component {

    
    constructor() {
        super();
        this.click = this.click.bind(this);

        this.state = {
            list: []
        }
    }

    componentDidMount() {
        this.setState({
            list: [1,2,3,4]
        })
    }

    click() {
        console.log('Je suis clické');
        // il faut que je rajoute un element à ma list
         const  list=this.state.list
          list.push ('5');//le resultat de push est la longeur de array donc il faut sauvgarder dans une variable 
       
       this.setState({
           list // es6 handl short car la variable a le memen nom 
       })
    }
    render() {
        return (
            <div>
                <p>Quizz</p>
                {/* afficher dans une balise p tout les element de la list}*/}
                {this.state.list.map((elem, index) => { // ilfaut faire un return car ya accolade 
                    return (<p key={index}>{elem}</p>)})};
               

                <button onClick={this.click}>Button</button>
            </div>
        )
    }

}

export default Quizz