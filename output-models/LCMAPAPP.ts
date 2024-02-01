import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface LCMAPAPPAttributes {
    STRAPPGUID: string;
    STRTARGETGUID: string;
}

@Table({
	tableName: "LCMAPAPP",
	timestamps: false 
})
export class LCMAPAPP extends Model<LCMAPAPPAttributes, LCMAPAPPAttributes> implements LCMAPAPPAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(40) 
    })
    	STRAPPGUID!: string;

    @Column({
    	type: DataType.STRING(40) 
    })
    	STRTARGETGUID!: string;

}