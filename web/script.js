async function search_book_in_name(){

    let name = document.getElementById("input-1").value
    let res = await eel.searchBook(name)();
    document.getElementById("result-0").innerHTML = res;

}

async function get_all_books(){

    let res = await eel.getBooks()();
    document.getElementById("result-1").innerHTML = res;

}

async function correct_book(){

    let name = document.getElementById("input-2").value
    let ganre = document.getElementById("input-4").value
    let kind = document.getElementById("input-5").value
    let year = document.getElementById("input-6").value
    let authors = document.getElementById("input-7").value
    let place = document.getElementById("input-8").value
    let res = await eel.editBook(name, ganre, kind, year, authors, place)();
    document.getElementById("result-2").innerHTML = res;

}

async function add_book(){

    let name = document.getElementById("input-10").value
    let ganre = document.getElementById("input-11").value
    let kind = document.getElementById("input-12").value
    let year = document.getElementById("input-13").value
    let authors = document.getElementById("input-14").value
    let place = document.getElementById("input-15").value
    let res = await eel.addBook(name, ganre, kind, year, authors, place)();
    document.getElementById("result-3").innerHTML = res;

}

async function delete_book(){

    let name = document.getElementById("input-16").value
    let res = await eel.deleteBook(name)();
    document.getElementById("result-4").innerHTML = res;

}