import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface LCPRTGRIDAttributes {
    GUIDREF: string;
    GUIDITEM: string;
    LORDER: number;
    STRJSON: string;
}

@Table({
	tableName: "LCPRTGRID",
	timestamps: false 
})
export class LCPRTGRID extends Model<LCPRTGRIDAttributes, LCPRTGRIDAttributes> implements LCPRTGRIDAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(40) 
    })
    	GUIDREF!: string;

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(40) 
    })
    	GUIDITEM!: string;

    @Column({
    	type: DataType.INTEGER 
    })
    	LORDER!: number;

    @Column({
    	type: DataType.STRING(2048) 
    })
    	STRJSON!: string;

}