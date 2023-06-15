const form=document.getElementById('write-form');

const handleSubmitForm = async (event) => {
    event.preventDefault();
    await fetch ("/items", {
        method: "POST",
        body: new FormData(form)
    });
    console.log('제출 성공');
};


form.addEventListener('submit',handleSubmitForm);