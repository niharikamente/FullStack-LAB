

        // --- 1. INTERACTIVE COUNTER LOGIC ---
        let count = 0;
        const counterDisplay = document.getElementById('counterDisplay');
        const increaseBtn = document.getElementById('increaseBtn');
        const decreaseBtn = document.getElementById('decreaseBtn');
        const resetBtn = document.getElementById("reset");
        const themeToggle = document.getElementById("themeToggle");
          // --- 2. THEME SWITCHER LOGIC ---
        themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        if(document.body.classList.contains("dark-mode")){
            themeToggle.textContent = "☀️";
        }else{
            themeToggle.textContent = "🌙";
        }
    });

        increaseBtn.addEventListener('click', () => {
            count++;
            counterDisplay.textContent = count;
        });

        decreaseBtn.addEventListener('click', () => {
            count--;
            counterDisplay.textContent = count;
        });

        resetBtn.addEventListener('click', () =>{
            count = 0;
            counterDisplay.textContent = count;
        });
        // --- 3. DYNAMIC LIST LOGIC ---
        const itemInput = document.getElementById('itemInput');
        const addBtn = document.getElementById('addBtn');
        const itemList = document.getElementById('itemList');

        addBtn.addEventListener('click', () => {
            const textValue = itemInput.value.trim();
            
            if (textValue !== "") {
                // Create a new list item element
                const newLi = document.createElement('li');
                newLi.textContent = textValue;

                // Append the new item to the existing list
                itemList.appendChild(newLi);

                // Clear input box
                itemInput.value = "";
            }
        });