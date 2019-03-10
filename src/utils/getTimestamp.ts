
const getTimestamp = () => {

  let d = new Date()
  let ts = d.getFullYear() + '-' 
    + ('0' + d.getMonth()).slice(-2) 
    + '-' + ('0' + d.getDate()).slice(-2) 
    + ' ' + ('0' + d.getHours()).slice(-2)
    + ':' + ('0' + d.getMinutes()).slice(-2)
    + ':' + ('0' + d.getSeconds()).slice(-2)
    
  return ts
}

export default getTimestamp