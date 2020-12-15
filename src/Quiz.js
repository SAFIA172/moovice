import React from 'react';
import CompB from './CompB'

class CompA extends React.Component {
    constructor (){
        super()
    this.state = {
        name: 'coucou',
        countries: []
    }

}
    click() {
        this.setstate({
            name:'salut'
        })
        // this.state.name = 'salut'
    }

    render() {

        <div>
          <p>  Je suis le composant A</p>
            <CompB title={this.state.name}></CompB>
            <button onclick={this.click}></button>
        </div>
    }
}

export default CompA;


// ------------------------

import React from 'react';

class CompB extends React.Component {

    constructor() {
        super()
        this.state = {
            name: 'nihao',
          
        }
    }

    componentdidmount() {
        console.log('Je suis une méthode de cycle de vie appellé au mount')
    }

    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
                <h1>onclickfn={this.props.onclick}</h1>
                <p>{this.props.countries}</p>
            </div>
        )
    }
}

export  default CompB;


// corigé

import React from 'react';
import CompB from './CompB'

class CompA extends React.Component {
    
    constructor() {
        super();
        this.state = {
            name: 'coucou',
            countries: []
        }
        this.click = this.click.bind(this);
    }

    click() {
        this.setState({
            name: 'salut'
        })
    }


    render() {
        return (
            <div>
                Je suis le composant A
                <CompB title={this.state.name} countries={this.state.countries}></CompB>
                <button onClick={this.click}></button>
            </div>
        )
    }
}

export default CompA;


// ------------------------

import React from 'react';

class CompB extends React.Component {

    constructor() {
        super();
        this.state = {
            name: 'nihao'
        }
    }

    componentDidMount() {
        console.log('Je suis une méthode de cycle de vie appellé au mount');
    }

    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <p>{this.props.countries}</p>
            </div>
        )
    }
}

export default CompB;