/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/main.ts":
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

var student1 = {
    firstName: "James",
    lastName: "Moyes",
    age: 35,
    location: "Los Angeles"
};
var student2 = {
    firstName: "Billy",
    lastName: "Butcher",
    age: 25,
    location: "San Francisco"
};
var studentsList = [student1, student2];
// RENDER A TABLE FOR EACH ELEMENTS IN THE ARRAY, append a new row to the table
// create a function that would handle the table rendering, with html structure
function renderTable() {
    // create a table element and add border
    var table = document.createElement('table');
    table.border = "1";
    // create table header
    var header = table.createTHead();
    // create header row
    var headerRow = header.insertRow(0);
    var firstNameHeader = document.createElement('th');
    var lastNameHeader = document.createElement('th');
    var ageHeader = document.createElement('th');
    var locationHeader = document.createElement('th');
    // set the placeholders for table
    firstNameHeader.textContent = "First Name";
    lastNameHeader.textContent = "Last Name";
    ageHeader.textContent = "Age";
    locationHeader.textContent = "Location";
    // Append the values to header row
    headerRow.appendChild(firstNameHeader);
    headerRow.appendChild(lastNameHeader);
    headerRow.appendChild(ageHeader);
    headerRow.appendChild(locationHeader);
    // create the table body
    var tableBody = table.createTBody();
    // Iterate over the studentsList and create a row for each student
    studentsList.forEach(function (student) {
        // create a row canvas
        var row = tableBody.insertRow();
        // create cells from row
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        // render contents from array into the cells
        cell1.textContent = student.firstName;
        cell2.textContent = student.lastName;
        cell3.textContent = "" + student.age;
        cell4.textContent = student.location;
    });
    // append the table to the html document body or a specific div
    document.body.appendChild(table);
}
// call the function to render the table
renderTable();


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vanMvbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUMzRUEsSUFBTSxRQUFRLEdBQVk7SUFDdEIsU0FBUyxFQUFFLE9BQU87SUFDbEIsUUFBUSxFQUFFLE9BQU87SUFDakIsR0FBRyxFQUFFLEVBQUU7SUFDUCxRQUFRLEVBQUUsYUFBYTtDQUMxQixDQUFDO0FBRUYsSUFBTSxRQUFRLEdBQVk7SUFDdEIsU0FBUyxFQUFFLE9BQU87SUFDbEIsUUFBUSxFQUFFLFNBQVM7SUFDbkIsR0FBRyxFQUFFLEVBQUU7SUFDUCxRQUFRLEVBQUUsZUFBZTtDQUM1QixDQUFDO0FBRUYsSUFBTSxZQUFZLEdBQW1CLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBRTFELCtFQUErRTtBQUUvRSwrRUFBK0U7QUFDL0UsU0FBUyxXQUFXO0lBQ2hCLHdDQUF3QztJQUN4QyxJQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzlDLEtBQUssQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO0lBRW5CLHNCQUFzQjtJQUN0QixJQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDbkMsb0JBQW9CO0lBQ3BCLElBQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEMsSUFBTSxlQUFlLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyRCxJQUFNLGNBQWMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BELElBQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0MsSUFBTSxjQUFjLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUVwRCxpQ0FBaUM7SUFDakMsZUFBZSxDQUFDLFdBQVcsR0FBRyxZQUFZLENBQUM7SUFDM0MsY0FBYyxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7SUFDekMsU0FBUyxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7SUFDOUIsY0FBYyxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUM7SUFFeEMsa0NBQWtDO0lBQ2xDLFNBQVMsQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDdkMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUN0QyxTQUFTLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2pDLFNBQVMsQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLENBQUM7SUFFdEMsd0JBQXdCO0lBQ3hCLElBQU0sU0FBUyxHQUFHLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUV0QyxrRUFBa0U7SUFDbEUsWUFBWSxDQUFDLE9BQU8sQ0FBQyxVQUFDLE9BQU87UUFDekIsc0JBQXNCO1FBQ3RCLElBQU0sR0FBRyxHQUFHLFNBQVMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUVsQyx3QkFBd0I7UUFDeEIsSUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoQyxJQUFNLEtBQUssR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hDLElBQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEMsSUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVoQyw0Q0FBNEM7UUFDNUMsS0FBSyxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDO1FBQ3RDLEtBQUssQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQztRQUNyQyxLQUFLLENBQUMsV0FBVyxHQUFHLEtBQUcsT0FBTyxDQUFDLEdBQUssQ0FBQztRQUNyQyxLQUFLLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUM7SUFDekMsQ0FBQyxDQUFDLENBQUM7SUFFSCwrREFBK0Q7SUFDL0QsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDckMsQ0FBQztBQUVELHdDQUF3QztBQUN4QyxXQUFXLEVBQUUsQ0FBQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2pzL21haW4udHNcIik7XG4iLCJpbnRlcmZhY2UgU3R1ZGVudCB7XG4gICAgZmlyc3ROYW1lOiBzdHJpbmc7XG4gICAgbGFzdE5hbWU6IHN0cmluZztcbiAgICBhZ2U6IG51bWJlcjtcbiAgICBsb2NhdGlvbjogc3RyaW5nO1xufVxuXG5jb25zdCBzdHVkZW50MTogU3R1ZGVudCA9IHtcbiAgICBmaXJzdE5hbWU6IFwiSmFtZXNcIixcbiAgICBsYXN0TmFtZTogXCJNb3llc1wiLFxuICAgIGFnZTogMzUsXG4gICAgbG9jYXRpb246IFwiTG9zIEFuZ2VsZXNcIlxufTtcblxuY29uc3Qgc3R1ZGVudDI6IFN0dWRlbnQgPSB7XG4gICAgZmlyc3ROYW1lOiBcIkJpbGx5XCIsXG4gICAgbGFzdE5hbWU6IFwiQnV0Y2hlclwiLFxuICAgIGFnZTogMjUsXG4gICAgbG9jYXRpb246IFwiU2FuIEZyYW5jaXNjb1wiXG59O1xuXG5jb25zdCBzdHVkZW50c0xpc3Q6IEFycmF5PFN0dWRlbnQ+ID0gW3N0dWRlbnQxLCBzdHVkZW50Ml07XG5cbi8vIFJFTkRFUiBBIFRBQkxFIEZPUiBFQUNIIEVMRU1FTlRTIElOIFRIRSBBUlJBWSwgYXBwZW5kIGEgbmV3IHJvdyB0byB0aGUgdGFibGVcblxuLy8gY3JlYXRlIGEgZnVuY3Rpb24gdGhhdCB3b3VsZCBoYW5kbGUgdGhlIHRhYmxlIHJlbmRlcmluZywgd2l0aCBodG1sIHN0cnVjdHVyZVxuZnVuY3Rpb24gcmVuZGVyVGFibGUoKSB7XG4gICAgLy8gY3JlYXRlIGEgdGFibGUgZWxlbWVudCBhbmQgYWRkIGJvcmRlclxuICAgIGNvbnN0IHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGFibGUnKTtcbiAgICB0YWJsZS5ib3JkZXIgPSBcIjFcIjtcblxuICAgIC8vIGNyZWF0ZSB0YWJsZSBoZWFkZXJcbiAgICBjb25zdCBoZWFkZXIgPSB0YWJsZS5jcmVhdGVUSGVhZCgpO1xuICAgIC8vIGNyZWF0ZSBoZWFkZXIgcm93XG4gICAgY29uc3QgaGVhZGVyUm93ID0gaGVhZGVyLmluc2VydFJvdygwKTtcbiAgICBjb25zdCBmaXJzdE5hbWVIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aCcpO1xuICAgIGNvbnN0IGxhc3ROYW1lSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGgnKTtcbiAgICBjb25zdCBhZ2VIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aCcpO1xuICAgIGNvbnN0IGxvY2F0aW9uSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGgnKTtcblxuICAgIC8vIHNldCB0aGUgcGxhY2Vob2xkZXJzIGZvciB0YWJsZVxuICAgIGZpcnN0TmFtZUhlYWRlci50ZXh0Q29udGVudCA9IFwiRmlyc3QgTmFtZVwiO1xuICAgIGxhc3ROYW1lSGVhZGVyLnRleHRDb250ZW50ID0gXCJMYXN0IE5hbWVcIjtcbiAgICBhZ2VIZWFkZXIudGV4dENvbnRlbnQgPSBcIkFnZVwiO1xuICAgIGxvY2F0aW9uSGVhZGVyLnRleHRDb250ZW50ID0gXCJMb2NhdGlvblwiO1xuXG4gICAgLy8gQXBwZW5kIHRoZSB2YWx1ZXMgdG8gaGVhZGVyIHJvd1xuICAgIGhlYWRlclJvdy5hcHBlbmRDaGlsZChmaXJzdE5hbWVIZWFkZXIpO1xuICAgIGhlYWRlclJvdy5hcHBlbmRDaGlsZChsYXN0TmFtZUhlYWRlcik7XG4gICAgaGVhZGVyUm93LmFwcGVuZENoaWxkKGFnZUhlYWRlcik7XG4gICAgaGVhZGVyUm93LmFwcGVuZENoaWxkKGxvY2F0aW9uSGVhZGVyKTtcblxuICAgIC8vIGNyZWF0ZSB0aGUgdGFibGUgYm9keVxuICAgIGNvbnN0IHRhYmxlQm9keSA9IHRhYmxlLmNyZWF0ZVRCb2R5KCk7XG5cbiAgICAvLyBJdGVyYXRlIG92ZXIgdGhlIHN0dWRlbnRzTGlzdCBhbmQgY3JlYXRlIGEgcm93IGZvciBlYWNoIHN0dWRlbnRcbiAgICBzdHVkZW50c0xpc3QuZm9yRWFjaCgoc3R1ZGVudCkgPT4ge1xuICAgICAgICAvLyBjcmVhdGUgYSByb3cgY2FudmFzXG4gICAgICAgIGNvbnN0IHJvdyA9IHRhYmxlQm9keS5pbnNlcnRSb3coKTtcblxuICAgICAgICAvLyBjcmVhdGUgY2VsbHMgZnJvbSByb3dcbiAgICAgICAgY29uc3QgY2VsbDEgPSByb3cuaW5zZXJ0Q2VsbCgwKTtcbiAgICAgICAgY29uc3QgY2VsbDIgPSByb3cuaW5zZXJ0Q2VsbCgxKTtcbiAgICAgICAgY29uc3QgY2VsbDMgPSByb3cuaW5zZXJ0Q2VsbCgyKTtcbiAgICAgICAgY29uc3QgY2VsbDQgPSByb3cuaW5zZXJ0Q2VsbCgzKTtcblxuICAgICAgICAvLyByZW5kZXIgY29udGVudHMgZnJvbSBhcnJheSBpbnRvIHRoZSBjZWxsc1xuICAgICAgICBjZWxsMS50ZXh0Q29udGVudCA9IHN0dWRlbnQuZmlyc3ROYW1lO1xuICAgICAgICBjZWxsMi50ZXh0Q29udGVudCA9IHN0dWRlbnQubGFzdE5hbWU7XG4gICAgICAgIGNlbGwzLnRleHRDb250ZW50ID0gYCR7c3R1ZGVudC5hZ2V9YDtcbiAgICAgICAgY2VsbDQudGV4dENvbnRlbnQgPSBzdHVkZW50LmxvY2F0aW9uOyBcbiAgICB9KTtcblxuICAgIC8vIGFwcGVuZCB0aGUgdGFibGUgdG8gdGhlIGh0bWwgZG9jdW1lbnQgYm9keSBvciBhIHNwZWNpZmljIGRpdlxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGFibGUpO1xufVxuXG4vLyBjYWxsIHRoZSBmdW5jdGlvbiB0byByZW5kZXIgdGhlIHRhYmxlXG5yZW5kZXJUYWJsZSgpOyJdLCJzb3VyY2VSb290IjoiIn0=