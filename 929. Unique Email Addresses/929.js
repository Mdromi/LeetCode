/**
 * @param {string[]} emails
 * @return {number}
 */
const emailValidate = email => {
    let farstPath = ''
    let lastPath = ''
    for (let i = 0; i < email.length; i++) {
        if(email[i] === '@') {
            farstPath = email.slice(0, i) 
            lastPath = email.slice(i+1, email.length)
        }
    }
 
    let sliceFarstPath = ''
    for (let i = 0; i < farstPath.length; i++) {
        
        if(farstPath[i] === '+') break;
        if(farstPath[i] !== '.') {
            sliceFarstPath = sliceFarstPath + farstPath[i]
        }
    }
    const validmail = sliceFarstPath + '@' + lastPath
    return validmail
}

 var numUniqueEmails = function(emails) {
    let validmail = new Set();
    for (let i = 0; i < emails.length; i++) {
        validmail.add(emailValidate(emails[i]))
    }
    return validmail.size
};

const eamil = ["fg.r.u.uzj+o.pw@kziczvh.com","r.cyo.g+d.h+b.ja@tgsg.z.com","fg.r.u.uzj+o.f.d@kziczvh.com","r.cyo.g+ng.r.iq@tgsg.z.com","fg.r.u.uzj+lp.k@kziczvh.com","r.cyo.g+n.h.e+n.g@tgsg.z.com","fg.r.u.uzj+k+p.j@kziczvh.com","fg.r.u.uzj+w.y+b@kziczvh.com","r.cyo.g+x+d.c+f.t@tgsg.z.com","r.cyo.g+x+t.y.l.i@tgsg.z.com","r.cyo.g+brxxi@tgsg.z.com","r.cyo.g+z+dr.k.u@tgsg.z.com","r.cyo.g+d+l.c.n+g@tgsg.z.com","fg.r.u.uzj+vq.o@kziczvh.com","fg.r.u.uzj+uzq@kziczvh.com","fg.r.u.uzj+mvz@kziczvh.com","fg.r.u.uzj+taj@kziczvh.com","fg.r.u.uzj+fek@kziczvh.com"]


const v = numUniqueEmails(eamil)
console.log(v);