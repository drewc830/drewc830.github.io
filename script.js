
shown = false;

function showImage(elemId, imgSrc)
{
    if(shown)
    {
        console.log("element is unclicked");
        console.log("\tElemId:" + elemId);
        const elem = document.getElementById(elemId);
        while (elem.childElementCount > 0)
        {
        elem.removeChild(elem.lastChild);
        }
        shown=false;
    }
    else
    {
    console.log("element is clicked");
    console.log("\tElemId:" + elemId + " Image Source:" + imgSrc);
    const elem = document.getElementById(elemId);
    const popImage = new Image();
    popImage.src = imgSrc;
    popImage.style.width = "100%";
    popImage.style.height = "auto";
    popImage.className = "popupImage";
    elem.appendChild(popImage);
    shown = true;
    }
    
}



