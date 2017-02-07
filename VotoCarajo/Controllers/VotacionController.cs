using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace VotoCarajo.Controllers
{
    public class VotacionController : Controller
    {
        //
        // GET: /Votacion/

        public ActionResult Index()
        {
            ViewBag.Usuario = this.User.Identity.Name;
            return View();
        }

    }
}
