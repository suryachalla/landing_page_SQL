


const accordHeader = document.querySelectorAll('.bootcamp_syllabus_title');

accordHeader.forEach((ach) => {
    ach.addEventListener("click",toggleItem,false)
})

function toggleItem() {
    const currentContentEle = this.nextElementSibling;
    const isCollapsed = currentContentEle.classList.contains("bootcamp_syllabus_collapse");

    accordHeader.forEach((ach) => {
        const contentEle = ach.nextElementSibling;
        if (!contentEle.classList.contains("bootcamp_syllabus_collapse")){
            contentEle.classList.add("bootcamp_syllabus_collapse")
        }
    })

    if (isCollapsed) {
        currentContentEle.classList.remove("bootcamp_syllabus_collapse")
    }


}


// faq collapsible script
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}
// faq collapsible script