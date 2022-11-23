import { Controller } from "@hotwired/stimulus";

export default class extends Controller
{
    contact() {
        this.element.innerHTML = 'You have clicked me 0 times ';
    }
}

