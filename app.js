// Import Firebase configuration and initialize Firebase
import { database } from './firebase';

// Ensure the DOM is fully loaded before executing the script
document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('content');

    // Example: Fetch data from Firebase and display it
    database.ref('/data').once('value')
        .then(snapshot => {
            const data = snapshot.val();
            content.innerHTML = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });

    // Implement your CRUB functionality here
    // Example functions for Create, Read, Update, and Delete

    // Create data in Firebase
    function createData(key, value) {
        database.ref('/data/' + key).set(value, (error) => {
            if (error) {
                console.error('Error creating data:', error);
            } else {
                console.log('Data created successfully');
            }
        });
    }

    // Read data from Firebase
    function readData(key) {
        database.ref('/data/' + key).once('value')
            .then(snapshot => {
                const data = snapshot.val();
                console.log('Read data:', data);
            })
            .catch(error => {
                console.error('Error reading data:', error);
            });
    }

    // Update data in Firebase
    function updateData(key, value) {
        database.ref('/data/' + key).update(value, (error) => {
            if (error) {
                console.error('Error updating data:', error);
            } else {
                console.log('Data updated successfully');
            }
        });
    }

    // Delete data from Firebase
    function deleteData(key) {
        database.ref('/data/' + key).remove((error) => {
            if (error) {
                console.error('Error deleting data:', error);
            } else {
                console.log('Data deleted successfully');
            }
        });
    }

    // Example usage of the CRUB functions
    createData('exampleKey', { name: 'John Doe', age: 30 });
    readData('exampleKey');
    updateData('exampleKey', { age: 31 });
    deleteData('exampleKey');
});
document.getElementById('create').addEventListener('click', () => {
    createData('exampleKey', { name: 'John Doe', age: 30 });
});

document.getElementById('read').addEventListener('click', () => {
    readData('exampleKey');
});

document.getElementById('update').addEventListener('click', () => {
    updateData('exampleKey', { age: 31 });
});

document.getElementById('delete').addEventListener('click', () => {
    deleteData('exampleKey');
});


document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('content');

    // Example: Fetch data from Firebase and display it
    database.ref('/test').set({ test: 'Test Data' })
        .then(() => {
            console.log('Data written successfully');
        })
        .catch(error => {
            console.error('Error writing data:', error);
        });

    database.ref('/test').once('value')
        .then(snapshot => {
            const data = snapshot.val();
            content.innerHTML = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});
