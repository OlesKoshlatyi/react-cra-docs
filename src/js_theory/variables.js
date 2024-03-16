/* Variables declared with let or const are hoisted WITHOUT a default
	initialization. So accessing them before the line they were declared
	throws ReferenceError:
	"Cannot access 'variable' before initialization." */

/* But variables declared with var are hoisted WITH a default initialization of
   undefined. So accessing them
   before the line they were declared returns undefined. */

/* There's a name for the period during execution where let/const variables are
	hoisted but not accessible: it's called the Temporal Dead Zone */
