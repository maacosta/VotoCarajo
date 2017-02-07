using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace VotoCarajo.Controllers
{
    public class VotoController : ApiController
    {
        // GET api/voto
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/voto/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/voto
        public void Post([FromBody]string value)
        {
        }

        // PUT api/voto/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/voto/5
        public void Delete(int id)
        {
        }
    }
}
