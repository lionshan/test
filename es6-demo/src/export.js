
class Father {
  _render(){
    throw new Error('子列为空')
  }
  render(){
    return(
      `<ul>${this._render()}</ul>`
    )
  }
}
export {Father};
