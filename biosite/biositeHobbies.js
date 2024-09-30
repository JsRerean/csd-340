class Node {
    constructor(image) {
        this.image = image; 
        this.next = null; 
    }
}

class CircularLinkedList {
    constructor() {
        this.head = null; 
        this.current = null; // Track the current image
    }

    add(image) {
        const newNode = new Node(image);
        if (!this.head) {
            this.head = newNode;
            newNode.next = this.head; 
            this.current = this.head; // Set current to the first image
        } else {
            let current = this.head;
            while (current.next !== this.head) {
                current = current.next; 
            }
            current.next = newNode; 
            newNode.next = this.head; 
        }
    }

    display(container) {
        if (!this.current) return;
        container.innerHTML = ''; // Clear previous image
        const imgElement = document.createElement('img');
        imgElement.src = this.current.image; // Set image source
        container.appendChild(imgElement); // Append image to the container
    }

    next() {
        if (this.current) {
            this.current = this.current.next; // Move to the next image
        }
    }
}

// Ensure the DOM is loaded before running the code
window.onload = function() {
    // Create the circular linked list
    const circularList = new CircularLinkedList();

    // Array containing the image paths
    const images = ['images/jart1.jpg', 'images/jart2.jpg', 'images/jart3.jpg'];

    // Add images to the circular linked list
    images.forEach(image => circularList.add(image));

    // Get the container and display the first image
    const container = document.getElementById('image-container');
    circularList.display(container);

    // Add event listener for the button
    document.getElementById('nextImage').addEventListener('click', function() {
        circularList.next(); // Move to the next image
        circularList.display(container); // Display the new current image
    });
};
