        function(e={
            viewPass: !1,
            autoHeight: !1
        }) {
            const t = document.querySelectorAll("input[placeholder],textarea[placeholder]");
            if (t.length && t.forEach((e => {
                e.hasAttribute("data-placeholder-nohide") || (e.dataset.placeholder = e.placeholder)
            }
            )),
            document.body.addEventListener("focusin", (function(e) {
                const t = e.target;
                "INPUT" !== t.tagName && "TEXTAREA" !== t.tagName || (t.dataset.placeholder && (t.placeholder = ""),
                t.hasAttribute("data-no-focus-classes") || (t.classList.add("_form-focus"),
                t.parentElement.classList.add("_form-focus")),
                u.removeError(t))
            }
            )),
            document.body.addEventListener("focusout", (function(e) {
                const t = e.target;
                "INPUT" !== t.tagName && "TEXTAREA" !== t.tagName || (t.dataset.placeholder && (t.placeholder = t.dataset.placeholder),
                t.hasAttribute("data-no-focus-classes") || (t.classList.remove("_form-focus"),
                t.parentElement.classList.remove("_form-focus")),
                t.hasAttribute("data-validate") && u.validateInput(t))
            }
            )),
            e.viewPass && document.addEventListener("click", (function(e) {
                let t = e.target;
                if (t.closest('[class*="__viewpass"]')) {
                    let e = t.classList.contains("_viewpass-active") ? "password" : "text";
                    t.parentElement.querySelector("input").setAttribute("type", e),
                    t.classList.toggle("_viewpass-active")
                }
            }
            )),
            e.autoHeight) {
                const i = document.querySelectorAll("textarea[data-autoheight]");
                if (i.length) {
                    function s(e, t) {
                        e.style.height = `${t}px`
                    }
                    i.forEach((e => {
                        const t = e.hasAttribute("data-autoheight-min") ? Number(e.dataset.autoheightMin) : Number(e.offsetHeight)
                          , i = e.hasAttribute("data-autoheight-max") ? Number(e.dataset.autoheightMax) : 1 / 0;
                        s(e, Math.min(t, i)),
                        e.addEventListener("input", ( () => {
                            e.scrollHeight > t && (e.style.height = "auto",
                            s(e, Math.min(Math.max(e.scrollHeight, t), i)))
                        }
                        ))
                    }
                    ))
                }
            }
        }({
            viewPass: !1,
            autoHeight: !1
        }),
        function() {
            const e = document.forms;
            if (e.length)
                for (const i of e)
                    i.addEventListener("submit", (function(e) {
                        t(e.target, e)
                    }
                    )),
                    i.addEventListener("reset", (function(e) {
                        const t = e.target;
                        u.formClean(t)
                    }
                    ));
            async function t(e, t) {
                if (0 === (e.hasAttribute("data-no-validate") ? 0 : u.getErrors(e))) {
                    if (e.hasAttribute("data-ajax")) {
                        t.preventDefault();
                        const s = e.getAttribute("action") ? e.getAttribute("action").trim() : "#"
                          , n = e.getAttribute("method") ? e.getAttribute("method").trim() : "GET"
                          , o = new FormData(e);
                        e.classList.add("_sending");
                        const r = await fetch(s, {
                            method: n,
                            body: o
                        });
                        if (r.ok) {
                            let t = await r.json();
                            e.classList.remove("_sending"),
                            i(e, t)
                        } else
                            alert("Произошла ошибка"),
                            e.classList.remove("_sending")
                    } else
                        e.hasAttribute("data-dev") && (t.preventDefault(),
                        i(e))
                } else if (t.preventDefault(),
                e.querySelector("._form-error") && e.hasAttribute("data-goto-error")) {
                    const t = e.dataset.gotoError ? e.dataset.gotoError : "._form-error";
                    c(t, !0, 1e3)
                }
            }
            function i(e, t="") {
                document.dispatchEvent(new CustomEvent("formSent",{
                    detail: {
                        form: e
                    }
                })),
                alert("Форма отправлена!"),
                u.formClean(e),
                d(`[Форми]: ${"Форму відправлено!"}`)
            }
        }(),


// import $, { ajax } from 'jquery'
// import 'jquery-validation'

// $(function() {
//   $('form button').on('click', () => {
//     const [form] = $(this).closest('form');
//     console.log(form);
//     return
//     if (form.valid()) {

//       console.log('form good')
//       // const actUrl = form.attr('action');

//       // $.ajax({
//       //   url: actUrl,
//       //   type: 'post',
//       //   dataType: 'html',
//       //   data: form.serialize(),
//       //   success: (data) => console.log(data),
//       //   error: () => console.log('Error')
//       // })
//     }
//   });
// });