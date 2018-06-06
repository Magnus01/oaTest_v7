

$(document).ready(function () {


    setInterval(function () {
        function _clearOldNonces(expirationSeconds) {
            // var now = _currentTime();
            // var now = Date(milliseconds);
            // now = 100;
            // var expirationTime = now - expirationSeconds * 1000;
            Object.keys(localStorage).forEach(function (key) {
                if (!key.startsWith('com.auth0.auth')) return;
                var el = JSON.parse(localStorage.getItem(key));
                // console.log(key);
                localStorage.removeItem(key);
                // localStorage.removeItem(accessToken);

                // if (!el.sweepTime) {
                //     el.sweepTime = now;
                //     localStorage.setItem(key, JSON.stringify(el));
                // } else if (el.sweepTime < expirationTime) {
                //     localStorage.removeItem(key);
                // }
            });
        }

        _clearOldNonces(10);

        // console.log(localStorage, 'localStorage');
        //
        // if the token is not in local storage, there is nothing to check (that is, the user is already logged out)
        if (!localStorage.getItem('accessToken')) {

            document.body.style.display = 'inline';
        }
        // return;

        // webAuth.checkSession(function (err, data) {
        //     if (err) {
        //         // if we get here, it means there is no session on Auth0,
        //         // then remove the token and redirect to #login
        //         alert('checksession?');
        //         localStorage.removeItem('userToken');
        //         window.location.href = '#login';
        //     }
        // });
    }, 5000);
});