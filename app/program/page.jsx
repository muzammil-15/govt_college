import Link from 'next/link'
import Button from '@/components/button'


const Program = () => {
  return (
    <div className='w-[95%] mx-auto flex justify-center items-center gap-4 flex-col h-[60vh] my-10'>

                <Button 
                    title={"Higher Secondary School Certificate (part I)"}
                    href={'/admission'}
                />
                <Button 
                    title={"Higher Secondary School Certificate (part II)"}
                    href={'/admission'}
                />
                <Button 
                    title={"ADA (part I)"}
                    href={'/admission'}
                />
                <Button 
                    title={"ADA (part I)"}
                    href={'/admission'}
                />

        
    </div>
  )
}

export default Program