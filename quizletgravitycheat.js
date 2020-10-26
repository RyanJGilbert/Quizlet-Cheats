 // In order to use this function, you must copy and paste everything into the console section of developer tools on Chrome when on the gravity game
 // Then press enter
 // Then type in: solve(), but do not press enter
 // Set the mode to "Hard", then go back to the console on solve() and press enter
 // Then, repeatedly click space bar and enter
function solve(){
	setInterval(function() {
		var as = document.getElementsByClassName("TermText")[1];
		var defi;
		var terms = Quizlet.gravityModeData.terms;
		var correctTerm;
		
		defi = as.innerText;
		for(var a=0; a!=terms.length; a++){
			if (terms[a]["definition"] == defi){
				correctTerm = terms[a]["word"];
				console.log(correctTerm);
				document.getElementsByClassName("GravityTypingPrompt-input")[0].value = correctTerm;
			}
		}

	}, 100);
}
// Copyright (c) 2020 Ryan Gilbert

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

// This code and it's author is not affilliated or endorsed by Quizlet.com