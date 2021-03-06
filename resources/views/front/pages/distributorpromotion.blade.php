@extends(user_env('layouts.main'))

@section('content')

  <div id="main-content" class="wrapper clearfix">           
    

<section class="page-content">
  <div class="page-wrapper">
    <div class="container">
      <div class="row">
        <div class="page-inner">
          <div id="page">
            <div class="details">              
              <center><h2><i>Distributor Promotion</h2>
              <p><h4>AuraRich rewards hard work not only by Tour Incentives but also by Promotions. AuraRich Philippines will train Qualified Distributors to become one of our Sales Team Leader.</i></h4></p></center><br><br>

              
               <div class="col-sm-6">
              <a target="_blank" href="/front/gpi2.jpg">
                <img src="/front/gpi2.jpg" alt=" " width="500" height="500">
              </a>
              <div class="desc"></div>
            </div>
              
               <div class="col-sm-6">
              <a target="_blank" href="/front/gpi.jpg">
                <img src="/front/gpi.jpg" alt=" " width="500" height="500">
              </a>
              <div class="desc"></div>
            </div>
            
            <div class="col-sm-12">
            <center><a href="{{ route(user_env().'.system') }}" title="Gold Point Incentives"> <button class='btn btn-primary'>Gold Point Incentives</button></a></center><br><br>
            </div>
                   
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

          
  </div>  

@endsection

                    