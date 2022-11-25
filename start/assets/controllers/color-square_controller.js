import { Controller } from "@hotwired/stimulus";

export default class extends Controller
{
    selectedColorId = null;
    static targets = ['colorSquare','select'];

    connect() {
        this.selectTarget.classList.add('d-none');
    }

    selectColor(event) {
        this.setSelectedColor(event.currentTarget.dataset.colorId);
    }

    setSelectedColor(clickedColorId){
        if(clickedColorId === this.selectedColorId){
            event.currentTarget.classList.remove('selected')
            this.selectedColorId = null;
            this.selectTarget.value = '';
            return;
        }

        this.selectedColorId = clickedColorId;
        this.colorSquareTargets.forEach((element)=>{
            element.classList.remove('selected');
        })
        event.currentTarget.classList.add('selected');
        this.selectTarget.value = event.currentTarget.dataset.colorId;
    }

}

