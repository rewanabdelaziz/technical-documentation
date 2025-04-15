document.querySelectorAll('.copy').forEach((icon)=>{

    icon.addEventListener('click',()=>{

        const codeTAg = icon.closest('code');
        const copyText = codeTAg.innerText;
        // console.log(copyText);

        navigator.clipboard.writeText(copyText).then(()=> {
            let p = document.createElement('p');
            p.innerText='code copied!';
            codeTAg.appendChild(p);
            setTimeout(() => p.remove(), 1000);
        
        }).catch(function(err) {
            console.error('Failed to copy: ', err);
        });

    })
})
