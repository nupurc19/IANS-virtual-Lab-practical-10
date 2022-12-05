const encryption = (plainText, key,col)=>{
    let row = Math.floor(plainText.length/col)
    console.log(row,col)
    let cipherText = [];
    let k=0;
    for(let i=0;i<=row;i++){
        let ro = []
        let jumbledro = []
        for(let j=0;j<col;j++){
            if(plainText[k]==' ')
                ro.push('*')
            else if(plainText[k]==undefined)
            ro.push('+')  
            else
            ro.push(plainText[k])
            k++;
        }
        console.log(ro)

        let x=0;
        key.forEach((num)=>{
            // console.log(num)
            jumbledro[x] = ro[num-1]
            // console.log(jumbledro[num-1],ro[x])
            x++
        })
        // console.log(jumbledro)
        cipherText.push(jumbledro)
    }

    console.log(cipherText)
    let str="";
    cipherText.forEach((col)=>{
        col.forEach((char)=>{
            str+=char
        })
    })
    console.log(str)

    return str;
}

const decryption = (cipherText, key)=>{
    let col= key.length
    // console.log(col)
    let ctl=cipherText.length; //ciphertext_length
    // console.log(ctl)
    for(let i=0;i<cipherText.length;i++){
        if(cipherText[i]=='+')
            ctl--
    }
    // console.log(ctl)
    let row = Math.floor(ctl/col)
    let plainText = [];
    let k=0;
    for(let i=0;i<=row;i++){
        let ro = []
        let jumbledro = []
        for(let j=0;j<col;j++){
            if(cipherText[k]=='*')
                ro.push(' ')
            else if(cipherText[k]=='+')
            ro.push('_')
            else
            ro.push(cipherText[k])
            k++;
        }
        // console.log(ro)
        let x=0;
        key.forEach((num)=>{
            jumbledro[num-1] = ro[x]
            x++
        })
        plainText.push(jumbledro)
    }

    console.log(plainText)
    let str="";
    plainText.forEach((col)=>{
        col.forEach((char)=>{
            str+=char
        })
    })
    console.log(str)

    return str;
}

const generatekey = (col)=>{
    let key=[];
    let array=[];
    for(let i=0;i<col;i++)
        array.push(i+1)
    for (var a = array, i = a.length; i--; ) {
        var random = a.splice(Math.floor(Math.random() * (i + 1)), 1)[0];
        key.push(random);
    }
    console.log(key)
    return key;
}

key=generatekey(col)
let message= "ARSHAL DAISON"
// let ct= encryption(message,key,5)
// let reverse = key.reverse()
// let pt=decryption(ct,key)
const encrypt = ()=>{
    // window.event.preventDefault()
    let plainText = document.getElementById("plain_text").value
    let col = parseInt(document.getElementById("col").value)
    let cipherResult = document.getElementById("cipher_result")
    let cipher_key = document.getElementById("cipher_key")
    let key=generatekey(col)
    let ct= encryption(plainText,key,col)
    cipherResult.value = ct
    cipher_key.value = key.toString()
    // window.alert(ct,key.toString())

}


const decrypt = ()=>{
    // window.event.preventDefault()
    let cipher_text = document.getElementById("cipher_text").value
    let key = document.getElementById("key").value
    let keyArray = key.split(",")
    let keyArr =[]
    for(let i=0;i<keyArray.length;i++){
        keyArr.push(parseInt(keyArray[i]))
    }
    let pt=decryption(cipher_text,keyArr)
    let decipherResult = document.getElementById("decipher_result")
    decipherResult.value = pt
    // window.alert(ct,key.toString())

}
// console.log('--',pt,'--')