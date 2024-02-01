import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface LCAPPCONTROLDRTITLEAttributes {
    STRCONTROLDRGUID: string;
    STRLANG: string;
    STRITEM?: string;
}

@Table({
	tableName: "LCAPPCONTROLDRTITLE",
	timestamps: false 
})
export class LCAPPCONTROLDRTITLE extends Model<LCAPPCONTROLDRTITLEAttributes, LCAPPCONTROLDRTITLEAttributes> implements LCAPPCONTROLDRTITLEAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(40) 
    })
    	STRCONTROLDRGUID!: string;

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(16) 
    })
    	STRLANG!: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(2048) 
    })
    	STRITEM?: string;

}