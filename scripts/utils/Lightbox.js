export class LightBox {
  constructor(listElement) {
    this.currentElement = null;
    this.listElement = listElement;
  }

  show(id) {
    this.delete();
    this.currentElement = this.getElementById(id);
    console.log(' this.currentElement :', this.currentElement);
    const previous = document.querySelector('#lightbox .content .previous');

    let media;
    let mediaHTML;
    const firstName = this.getPhotographerName();

    if (!this.currentElement.video) {
      media = `Pictures/${firstName[0]}/${this.currentElement.image}`;
      mediaHTML = document.createElement('img');
      mediaHTML.classList.add('picture');
    } else {
      media = `Pictures/${firstName[0]}/${this.currentElement.video}`;
      mediaHTML = document.createElement('video');
      mediaHTML.setAttribute('controls', 'true');
    }

    document.querySelector('#lightbox').classList.add('show');

    const body = document.createElement('div');
    body.classList.add('bodySlider');

    const title = document.createElement('div');
    title.classList.add('title');
    title.innerHTML = `${this.currentElement.title}`;

    mediaHTML.setAttribute('src', media);

    body.appendChild(mediaHTML);
    body.appendChild(title);

    previous.insertAdjacentElement('afterend', body);
  }

  next() {
    let index = this.listElement.findIndex(
      (element) => element.id == this.currentElement.id
    );

    console.log('index', index);

    if (index == this.listElement.length - 1) {
      this.currentElement = this.listElement[0];
    } else {
      this.currentElement = this.listElement[index + 1];
    }
    console.log('this.currentElement', this.currentElement);

    this.delete();

    const firstName = this.getPhotographerName();
    this.show(this.currentElement.id, firstName[0]);
  }

  previous() {
    let index = this.listElement.findIndex(
      (element) => element.id == this.currentElement.id
    );
    if (index == 0) {
      this.currentElement = this.listElement[this.listElement.length - 1];
    } else {
      this.currentElement = this.listElement[index - 1];
    }

    this.delete();
    const firstName = this.getPhotographerName();
    this.show(this.currentElement.id, firstName[0]);
  }

  manageEvent() {
    document
      .querySelector('#lightbox .content .next')
      .addEventListener('click', () => {
        this.next();
      });

    document
      .querySelector('#lightbox .content .previous')
      .addEventListener('click', () => {
        this.previous();
      });

    document
      .querySelector('#lightbox .content .close')
      .addEventListener('click', () => {
        this.close();
      });

    document
      .querySelector('#lightbox .content .close')
      .addEventListener('click', (e) => {
        if (e.target == e.currentTarget) {
          this.close();
        }
      });

    document.addEventListener('keyup', (e) => {
      console.log(e.key);
      switch (e.key) {
        case 'ArrowRight':
          this.next();
          break;
        case 'ArrowLeft':
          this.previous();
          break;
        case 'Escape':
          this.close();
          break;
      }
    });
  }

  getElementById(id) {
    console.log('getElementById(id)', id);
    return this.listElement.find((element) => element.id == id);
  }

  getPhotographerName(){
    const namePhotographer = document.querySelector('.photograph-header .photographerInfos h2')
    const Name = namePhotographer.textContent
    console.log("----------> Name", Name);
    
    return Name.split(' ');
  }

  close() {
    document.querySelector('#lightbox').classList.remove('show');
  }

  delete() {
    const body = document.querySelector('#lightbox .content .bodySlider');
    console.log('body', body);
    if (body) {
      body.remove();
    }
  }
}
