# Apache Benchmark test
# $1 total request amount
# $2 concurrent request amount
# $3 address
ab -k -n $1 -c $2 $3
