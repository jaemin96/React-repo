import React from 'react';

const EsPage = () => {
    
    function esFunction() {
        this.text = "hello";

        return {
            text: "es5 & es6 function test",
            es5: function(){return this.text;},
            es6: ()=>{return this.text;} 
        }
    }
    
    let list: any;
    (list = []).length = 7;
    list.fill(0);

    const ESFunction = new esFunction();

    console.log({ESFunction.es5()},{ESFunction.es6()})
    
    return <h1>end</h1>;
};

export default EsPage;
