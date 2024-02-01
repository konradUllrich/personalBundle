import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface LCPRTMETADATAAttributes {
    GUIDPORTLET: string;
    STRLANG: string;
    STRTITLE: string;
    STRDESCRIPTION?: string;
}

@Table({
	tableName: "LCPRTMETADATA",
	timestamps: false 
})
export class LCPRTMETADATA extends Model<LCPRTMETADATAAttributes, LCPRTMETADATAAttributes> implements LCPRTMETADATAAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(40) 
    })
    	GUIDPORTLET!: string;

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(16) 
    })
    	STRLANG!: string;

    @Column({
    	type: DataType.STRING(255) 
    })
    	STRTITLE!: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(2048) 
    })
    	STRDESCRIPTION?: string;

}