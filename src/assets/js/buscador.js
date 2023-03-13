document.addEventListener("keyup", e=>{

    if (e.target.matches("#buscador-analisis")){
  
        if (e.key ==="Escape")e.target.value = ""
  
        document.querySelectorAll(".btn").forEach(analisis =>{
  
            analisis.textContent.toLowerCase().includes(e.target.value.toLowerCase())
              ?analisis.classList.remove("filtro")
              :analisis.classList.add("filtro")
        })
  
    }
  })