import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface DSATTRIBUTEAttributes {
    STRGUID: string;
    LCLASSID: number;
    STRNAME: string;
    STRCOLUMNNAME?: string;
    STRDATATYPE: string;
    LSIZE?: number;
    BMANDATORY: boolean;
    BNULLABLE: boolean;
    BSEARCHABLE: boolean;
    BARRAY: boolean;
    STRARRAYTABLENAME?: string;
    BTITLE: boolean;
    BDESCRIPTION: boolean;
    BCONTROL: boolean;
    LREFCLASSID?: number;
    STRREFATTRIBUTEGUID?: string;
    STRREFDISPATTRIBUTEGUID?: string;
    BMULTIVALUEREF?: boolean;
    BTENANTID?: boolean;
}

@Table({
	tableName: "DSATTRIBUTE",
	timestamps: false 
})
export class DSATTRIBUTE extends Model<DSATTRIBUTEAttributes, DSATTRIBUTEAttributes> implements DSATTRIBUTEAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(40) 
    })
    	STRGUID!: string;

    @Column({
    	type: DataType.INTEGER 
    })
    	LCLASSID!: number;

    @Column({
    	type: DataType.STRING(50) 
    })
    	STRNAME!: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(50) 
    })
    	STRCOLUMNNAME?: string;

    @Column({
    	type: DataType.STRING(40) 
    })
    	STRDATATYPE!: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LSIZE?: number;

    @Column({
    	type: DataType.STRING 
    })
    	BMANDATORY!: boolean;

    @Column({
    	type: DataType.STRING 
    })
    	BNULLABLE!: boolean;

    @Column({
    	type: DataType.STRING 
    })
    	BSEARCHABLE!: boolean;

    @Column({
    	type: DataType.STRING 
    })
    	BARRAY!: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(50) 
    })
    	STRARRAYTABLENAME?: string;

    @Column({
    	type: DataType.STRING 
    })
    	BTITLE!: boolean;

    @Column({
    	type: DataType.STRING 
    })
    	BDESCRIPTION!: boolean;

    @Column({
    	type: DataType.STRING 
    })
    	BCONTROL!: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LREFCLASSID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(40) 
    })
    	STRREFATTRIBUTEGUID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(40) 
    })
    	STRREFDISPATTRIBUTEGUID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	BMULTIVALUEREF?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	BTENANTID?: boolean;

}