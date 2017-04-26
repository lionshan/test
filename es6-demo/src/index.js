
import {Father} from './export.js'
class Son extends Father{
  _render(){
    return (`
      <li>shiyang</li>
    `)
  }
}
var son = new Son();
console.log(son.render());
