import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface LCPRTPROPAttributes {
    GUIDPORTLET: string;
    GUIDUSER: string;
    STRNAME: string;
    INTTYPEID: number;
    INTVERSION: number;
    TXTVALUE?: string;
}

@Table({
	tableName: "LCPRTPROP",
	timestamps: false 
})
export class LCPRTPROP extends Model<LCPRTPROPAttributes, LCPRTPROPAttributes> implements LCPRTPROPAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(40) 
    })
    	GUIDPORTLET!: string;

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(40) 
    })
    	GUIDUSER!: string;

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRNAME!: string;

    @Column({
    	type: DataType.INTEGER 
    })
    	INTTYPEID!: number;

    @Column({
    	type: DataType.INTEGER 
    })
    	INTVERSION!: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXTVALUE?: string;

}