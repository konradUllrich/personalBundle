import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface LCCATEGORYAttributes {
    STRGUID: string;
    STRNAME: string;
    STRTYPE: string;
    STRSUBTYPE: string;
    LORDER: number;
    BENABLED?: boolean;
    STRLANGCONSTTITLE?: string;
    TXTSETTINGS?: string;
}

@Table({
	tableName: "LCCATEGORY",
	timestamps: false 
})
export class LCCATEGORY extends Model<LCCATEGORYAttributes, LCCATEGORYAttributes> implements LCCATEGORYAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(40) 
    })
    	STRGUID!: string;

    @Column({
    	type: DataType.STRING(255) 
    })
    	STRNAME!: string;

    @Column({
    	type: DataType.STRING(255) 
    })
    	STRTYPE!: string;

    @Column({
    	type: DataType.STRING(255) 
    })
    	STRSUBTYPE!: string;

    @Column({
    	type: DataType.INTEGER 
    })
    	LORDER!: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	BENABLED?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(256) 
    })
    	STRLANGCONSTTITLE?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXTSETTINGS?: string;

}