/* Modules contains reusable methods, class and variables
using export and import keywords we can achieve module concepts
 */


export let appname="calculator"

export function add(a:number, b:number)
{
    return a+b
}

export class Formatter
{
    display()
    {
      console.log("Hello All")
    }
}

let Form=new Formatter
Form.display()