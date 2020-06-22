export function addDeleteEvent(){
    document.querySelector('.delete').addEventListener('click', closeNotification);
}

function closeNotification(){
    document.querySelector('#notification').classList.add('hide');
}

export function openNotification(text, nClss){
    document.querySelector('#text-notification').textContent = text;
    document.querySelector('#notidication').classList = `notification ${nClss}`;
}