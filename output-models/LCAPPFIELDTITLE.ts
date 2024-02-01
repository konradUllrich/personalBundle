import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface LCAPPFIELDTITLEAttributes {
    STRFIELDGUID: string;
    STRLANG: string;
    STRITEM?: string;
}

@Table({
	tableName: "LCAPPFIELDTITLE",
	timestamps: false 
})
export class LCAPPFIELDTITLE extends Model<LCAPPFIELDTITLEAttributes, LCAPPFIELDTITLEAttributes> implements LCAPPFIELDTITLEAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(40) 
    })
    	STRFIELDGUID!: string;

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