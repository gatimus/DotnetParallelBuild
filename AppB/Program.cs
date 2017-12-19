using System;

namespace AppB
{
    class Program
    {
        static void Main(string[] args)
        {
            var shared = new Shared.Shared();
            Console.WriteLine(shared.GetMsg() + " appB!");
        }
    }
}
