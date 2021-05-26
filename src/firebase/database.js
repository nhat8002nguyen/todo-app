import firebase from "./firebase";

export function writeItemData({ id, name, status }) {
    firebase
        .database()
        .ref("items/" + id)
        .set({
            name: name,
            status: status
        });
}

export function getItems() {
    const dbRef = firebase.database().ref();
    let items = [];

    dbRef
        .child("items")
        .get()
        .then((snapshot) => {
            if (snapshot.exists()) {
                const data = snapshot.val();
                const items = [];
                Object.keys(data).forEach((id) => {
                    items.push({
                        id: id,
                        ...data[id]
                    });
                });
            } else {
                console.log("No data available");
            }
            return items;
        })
        .then((data) => {
            items = data;
        })
        .catch((error) => {
            console.error(error);
        });
}
